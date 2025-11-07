'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import SignaturePadLib from 'signature_pad';

interface SignaturePadProps {
  value: string;
  onChange: (dataUrl: string) => void;
}

export interface SignaturePadHandle {
  getSignature: () => string;
  clear: () => void;
}

const EXPORT_MIME_TYPE = 'image/jpeg';
const EXPORT_QUALITY = 0.85;

const exportSignature = (signaturePad: SignaturePadLib) =>
  signaturePad.toDataURL(EXPORT_MIME_TYPE, EXPORT_QUALITY);

const SignaturePad = ({ value, onChange }: SignaturePadProps, ref: React.Ref<SignaturePadHandle>) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePadRef = useRef<SignaturePadLib | null>(null);
  const valueRef = useRef(value);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const signaturePad = signaturePadRef.current;
    if (!canvas || !signaturePad) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 900;
    const height = rect.height || 220;

    const imageData = signaturePad.toData();

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    const context = canvas.getContext('2d');
    if (context) {
      context.scale(ratio, ratio);
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);
    }

    signaturePad.clear();
    if (imageData.length > 0) {
      signaturePad.fromData(imageData);
    }
  };

  useImperativeHandle(ref, () => ({
    getSignature: () => {
      const signaturePad = signaturePadRef.current;
      if (!signaturePad || signaturePad.isEmpty()) {
        return '';
      }
      return exportSignature(signaturePad);
    },
    clear: () => {
      const signaturePad = signaturePadRef.current;
      if (!signaturePad) return;
      signaturePad.clear();
      valueRef.current = '';
      onChange('');
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 900;
    const height = rect.height || 220;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    const context = canvas.getContext('2d');
    if (context) {
      context.scale(ratio, ratio);
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);
    }

    const signaturePad = new SignaturePadLib(canvas, {
      minWidth: 0.7,
      maxWidth: 2.8,
      throttle: 16,
      penColor: '#111827',
      backgroundColor: '#ffffff',
    });

    signaturePadRef.current = signaturePad;
    resizeCanvas();

    signaturePad.onEnd = () => {
      const dataUrl = signaturePad.isEmpty() ? '' : exportSignature(signaturePad);
      if (dataUrl !== valueRef.current) {
        valueRef.current = dataUrl;
        onChange(dataUrl);
      }
    };

    if (value) {
      valueRef.current = value;
      signaturePad.fromDataURL(value);
    }

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      signaturePad.off();
      signaturePadRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const signaturePad = signaturePadRef.current;
    if (!signaturePad) return;

    if (!value) {
      signaturePad.clear();
      valueRef.current = '';
      return;
    }

    if (value !== valueRef.current) {
      signaturePad.fromDataURL(value);
      valueRef.current = value;
    }
  }, [value]);

  const handleClear = () => {
    const signaturePad = signaturePadRef.current;
    if (!signaturePad) return;
    signaturePad.clear();
    valueRef.current = '';
    onChange('');
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-md bg-white shadow-sm">
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '14rem', touchAction: 'none' }}
        />
      </div>
      <div className="flex justify-end mt-2">
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-primary hover:text-primary/80 font-semibold"
        >
          Unterschrift löschen
        </button>
      </div>
    </div>
  );
};

SignaturePad.displayName = 'SignaturePad';

export default forwardRef(SignaturePad);

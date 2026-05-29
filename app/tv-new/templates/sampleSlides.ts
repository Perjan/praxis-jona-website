import { TV_NEW_SLIDES, type TVSlide } from '../content';

const sampleIds = new Set(['welcome', 'botulinumtoxin', 'google-review']);

export const TV_TEMPLATE_SAMPLE_SLIDES: TVSlide[] = TV_NEW_SLIDES.filter((slide) => sampleIds.has(slide.id));

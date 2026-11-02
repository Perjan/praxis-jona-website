import assert from 'node:assert/strict';
import { evaluate } from '../../app/free-tools/clinical/perimenopause.mjs';
const base = { age:'45to54', context:'none', period:'recent', change:'no', burden:'mild', warning:'none', symptoms:[] };
const cases = [
  [{},'open'],
  [{symptoms:['fatigue']},'symptoms'],
  [{symptoms:['heat'],change:'yes'},'transition'],
  [{change:'yes'},'transition'],
  [{period:'gap'},'late'],
  [{period:'year'},'post'],
  [{period:'unknown',change:'yes'},'open'],
  [{age:'under40',period:'year'},'younger'],
  [{age:'40to44',period:'year'},'early'],
  [{age:'55plus',period:'year'},'post'],
  [{context:'hormones',period:'year'},'context'],
  [{context:'pregnancy',period:'year'},'context'],
  [{context:'uterus',period:'year'},'context'],
  [{context:'other',period:'gap'},'context'],
  [{context:'surgery',age:'under40'},'surgical'],
  [{warning:'emergency',period:'year'},'urgent'],
  [{warning:'postbleeding',period:'year'},'post']
];
for (const [overrides, expected] of cases) assert.equal(evaluate({...base,...overrides}).stage,expected);
assert.equal(evaluate({...base,warning:'emergency'}).warnings[0].level,'urgent');
assert.equal(evaluate({...base,warning:'postbleeding'}).warnings[0].level,'prompt');
assert.equal(evaluate({...base,warning:'abnormal'}).warnings[0].level,'prompt');
assert.ok(evaluate({...base,burden:'strong'}).warnings.some(item=>item.level==='care'));
assert.equal(evaluate({...base,symptoms:['breast','heat','vaginal','fog']}).education.length,5);
assert.ok(evaluate({...base,symptoms:['sleep']}).education.some(item=>item.title.includes('Schlafprobleme')&&item.text.includes('Progesteron')));
assert.ok(evaluate({...base,period:'year'}).education[0].text.includes('niedriger'));
assert.ok(evaluate({...base,context:'hormones'}).education[0].text.includes('allgemeine Zusammenhänge'));
assert.equal(evaluate({...base,warning:'emergency',symptoms:['sleep','heat']}).education.length,0);
for (const symptom of ['heat','sleep','fog','mood','vaginal','urinary','fatigue','breast','weight','joints','libido']) {
  const education = evaluate({...base,symptoms:[symptom]}).education;
  assert.equal(education.length,2);
  assert.ok(education[1].limitation&&education[1].observe&&education[1].sources.length);
}
for (const age of ['under40','40to44','45to54','55plus']) {
  for (const context of ['none','hormones','pregnancy','uterus','other','surgery']) {
    for (const period of ['recent','gap','year','unknown']) {
      for (const change of ['yes','no','unknown']) {
        for (const warning of ['none','emergency','postbleeding','abnormal']) {
          const output=evaluate({...base,age,context,period,change,warning});
          assert.ok(output.title&&output.explanation&&output.next);
          assert.ok(!('probability' in output)&&!('hormoneDiagnosis' in output));
          if (context!=='none'&&warning!=='emergency') assert.ok(['context','surgical'].includes(output.stage));
          if (warning==='emergency') assert.equal(output.stage,'urgent');
        }
      }
    }
  }
}
console.log('17 Ergebnisfälle, 11 Symptom-Erklärungen, Sonderfall- und Sicherheitsprüfungen sowie 1152 Kombinationen bestanden.');

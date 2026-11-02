import assert from 'node:assert/strict';
import {evaluateIron,evaluateIntake,parseLab} from '../../app/free-tools/clinical/iron.mjs';
const status={group:'adult',warning:'none',ferritin:'',tsat:'',hb:'normal',crp:'normal',risks:[],symptoms:[],recent:'no',rls:'no'};
const cases=[
 [{ferritin:'29,9'},'deficiency'],[{ferritin:'30'},'deficiency'],
 [{ferritin:'30.1'},'borderline'],[{ferritin:'49.9',symptoms:['fatigue']},'symptom-range'],
 [{ferritin:'50',symptoms:['fatigue']},'symptom-range'],[{ferritin:'50.1',symptoms:['fatigue']},'not-proven'],
 [{ferritin:'50',risks:['heavy']},'symptom-range'],
 [{ferritin:'44.9',hb:'low'},'anemia'],[{ferritin:'45',hb:'low'},'borderline'],
 [{ferritin:'70',crp:'high'},'inflammatory'],[{ferritin:'99.9',crp:'high'},'inflammatory'],
 [{ferritin:'100',crp:'high',tsat:'20'},'inflammation-open'],
 [{ferritin:'200',crp:'high',tsat:'19.9'},'inflammatory'],
 [{ferritin:'200',crp:'high',tsat:''},'inflammation-open'],
 [{ferritin:'20',crp:'high'},'deficiency'],
 [{ferritin:'90',crp:'normal',risks:['inflammation']},'inflammatory'],
 [{ferritin:'120',tsat:'19'},'availability'],
 [{ferritin:'1500'},'high'],[{ferritin:'20',tsat:'45'},'discordant'],
 [{ferritin:'10',recent:'yes'},'context'],[{ferritin:'10',risks:['overload']},'context'],
 [{group:'special',ferritin:'10'},'special'],[{warning:'acute'},'urgent'],[{},'open']
];
for(const [change,expected] of cases)assert.equal(evaluateIron({...status,...change}).code,expected,JSON.stringify(change));
assert.equal(parseLab('', 'Ferritin',10000),null);
assert.equal(parseLab('0','Ferritin',10000),0);
assert.equal(parseLab('28,5','Ferritin',10000),28.5);
for(const value of ['NaN','1e3','-2','1.234,5','<30','<script>'])assert.throws(()=>parseLab(value,'Ferritin',10000));
assert.throws(()=>evaluateIron({...status,tsat:'101'}));
assert.ok(evaluateIron({...status,ferritin:'59',rls:'yes'}).sections.some(section=>section.source==='rls'));
const intake={group:'adult',warning:'none',taking:'yes',confirmed:'yes',type:'salt',dose:'60plus',schedule:'alternate',food:'morning',blockers:[],vitamin:'no',adherence:'regular',tolerance:'good',duration:'long',response:'flat',conditions:[]};
assert.equal(evaluateIntake(intake).code,'no-obvious');
assert.equal(evaluateIntake({...intake,schedule:'daily'}).code,'no-obvious');
assert.equal(evaluateIntake({...intake,vitamin:'yes'}).code,'no-obvious');
assert.equal(evaluateIntake({...intake,food:'evening'}).code,'no-obvious');
assert.equal(evaluateIntake({...intake,dose:'under60'}).code,'no-obvious');
assert.equal(evaluateIntake({...intake,schedule:'multiple'}).code,'review');
assert.equal(evaluateIntake({...intake,blockers:['minerals']}).code,'review');
assert.equal(evaluateIntake({...intake,blockers:['medication']}).code,'review');
assert.equal(evaluateIntake({...intake,taking:'no'}).code,'not-taking');
assert.equal(evaluateIntake({...intake,group:'special'}).code,'special');
assert.equal(evaluateIntake({...intake,warning:'acute'}).code,'urgent');
assert.ok(evaluateIntake(intake).sections.some(section=>section.title.includes('Ferritin steigt')));
assert.ok(evaluateIntake(intake).sections.some(section=>section.title.includes('Vitamin C fehlt')));
for(const ferritin of ['',0,15,30,30.1,45,50,75,100,200,1000])for(const tsat of ['',10,19.9,20,45])for(const crp of ['normal','high','unknown'])for(const hb of ['normal','low','unknown']){
 const result=evaluateIron({...status,ferritin,tsat,crp,hb});
 assert.ok(result.code&&result.title&&result.intro);
 assert.equal('dose' in result,false);
}
console.log('24 Grenzwert- und Kontextfälle, Zahlenvalidierung, 13 Einnahmeprüfungen und 495 Laborkombinationen bestanden.');

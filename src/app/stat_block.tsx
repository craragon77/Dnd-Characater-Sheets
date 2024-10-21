'use client'
import { useState, useEffect } from "react";

export default function statBlock(){
    const [statNames, setStatNames] = useState(['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'])
    const [statBlock, setStatBlock] = useState({
        'strength': 0,
        'dexterity': 0,
        'constitution': 0,
        'intelligence': 0,
        'wisdom': 0,
        'charisma': 0
    });
    const [strengthSkills, setStrengthSkills] = useState([
        { name: 'Saving Throw', proficient: false}, 
        {name: 'Athletics', proficient: false}
    ]);
    const [dexteritySkills, setDexteritySkills] = useState([
        { name: 'Saving Throw', proficient: false},
        { name: 'Acrobatics', proficient: false },
        { name: 'Sleight of Hand', proficient: false },
        { name: 'Stealth', proficient: false },
    ]);
    const [constitutionSkills, setConstitutionSkills] = useState([
        { name: 'Saving Throw', proficient: false},
        // { name: 'Resist Poison', proficient: false },
        // { name: 'Resist Disease', proficient: false },
        // { name: 'Concentration Checks', proficient: false },
    ]);
    const [intelligenceSkills, setIntelligenceSkills] = useState([
        { name: 'Saving Throw', proficient: false},
        { name: 'Arcana', proficient: false },
        { name: 'History', proficient: false },
        { name: 'Investigation', proficient: false },
        { name: 'Nature', proficient: false },
        { name: 'Religion', proficient: false },
    ]);
    const [wisdomSkills, setWisdomSkills] = useState([
        { name: 'Saving Throw', proficient: false},
        { name: 'Animal Handling', proficient: false },
        { name: 'Insight', proficient: false },
        { name: 'Medicine', proficient: false },
        { name: 'Perception', proficient: false },
        { name: 'Survival', proficient: false },
    ]);
    const [charismaSkills, setCharismaSkills] = useState([
        { name: 'Saving Throw', proficient: false},
        { name: 'Deception', proficient: false },
        { name: 'Intimidation', proficient: false },
        { name: 'Performance', proficient: false },
        { name: 'Persuasion', proficient: false },
    ]);
    const [profBonus, setProfBonus] = useState(0);
    const [inpsiration, setInspiration] = useState(null);
    const [passiveWisdom, setPassiveWisdom] = useState(0);

    useEffect(() => {
        setStatBlock({
            'strength': 10,
            'dexterity': 18,
            'constitution': 14,
            'intelligence': 9,
            'wisdom': 14,
            'charisma': 14
        });
        setProfBonus(2);

    },[]);

    //TO DO : ADD TABLE OF SKILLS; USE CHATGPT TO MAKE THE TABLE

    function formatStats(score:number){
        let newStat:number;
        switch(true){
            case (score >= 30):
            return '+10'; // Maximum modifier for scores above 30
            case (score >= 28):
            return '+9';
            case (score >= 26):
            return '+8';
            case (score >= 24):
            return '+7';
            case (score >= 22):
            return '+6';
            case (score >= 20):
            return '+5';
            case (score >= 18):
            return '+4';
            case (score >= 16):
            return '+3';
            case (score >= 14):
            return '+2';
            case (score >= 12):
            return '+1';
            case (score >= 10):
            return '0';
            case (score >= 8):
            return '-1';
            case (score >= 6):
            return '-2';
            case (score >= 4):
            return '-3';
            case (score >= 2):
            return '-4';
            default:
            return '-5'; // For scores below 2
        }
    };

    function returnStatHook(stat:string){
        switch(stat){
            case 'strength':
                return strengthSkills;
            case 'dexterity':
                return dexteritySkills;
            case 'constitution':
                return constitutionSkills;
            case 'intelligence':
                return intelligenceSkills;
            case 'wisdom':
                return wisdomSkills;
            case 'charisma':
                return charismaSkills
            default:
                return charismaSkills;
        };
    };

    function listSkills(statSkill: {name: string, proficient: boolean}[]){
        //this dynamically lists all the skill abilities for a given skill based on the state hooks above
        return statSkill.map((skill, idx) => {
            return<>
                <li id={`${statSkill}_${idx}`}>
                    <div>
                        <input id={`${skill.name}_${idx}`} type="radio" aria-checked={skill.proficient ? true : false} checked={skill.proficient ? true : false}/>
                        <label htmlFor={`${skill.name}_${idx}`}>{`${skill.name}`}</label>
                    </div>
                </li>
            </>
        })
    };

    function mapStatsAndSkills(){
        //creates each row of the stat block; the skill label, the skill level, and the skill modifier
        const statsValues = Object.values(statBlock);
        const statsKeys = Object.keys(statBlock)
        return statsKeys.map((stat:string, idx:number) => {
            let capitalLabel = stat.charAt(0).toUpperCase() + stat.slice(1);
            let listSkillsArg = returnStatHook(stat);
            console.log('listSkillArg', listSkillsArg);
            return <div key={idx} className="flex m-5 p-2 border-4 border-orange-500">
                <div className="border-4 border-indigo-500 m-3 p-3 text-center">
                    <p>{statsValues[idx]}</p>
                    <p className="text-2xl font-bold">{formatStats(statsValues[idx])}</p>
                    <p className="font-bold">{capitalLabel}</p>
                </div>
                <ul>{listSkills(listSkillsArg)}</ul>
            </div>
        })
    }

    return(
        <>
            <button className="btn btn-primary">Test</button>
            <div>
                <p>Proficiency Bonus: {profBonus}</p>
                <p>Inspiration:</p>
            </div>
            {mapStatsAndSkills()}
            <div>
                <p>Passive Wisdon: {passiveWisdom}</p>
            </div>
        </>
    )
}
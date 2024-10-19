'use client'
import { useState, useEffect } from "react";

export default function statBlock(){
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
    }

    function listSkills(statSkill: {name: string, proficient: boolean}[]){
        return statSkill.map((skill, idx) => {
            return<>
                <li id={`${statSkill}_${idx}`}>
                    <div>
                        <input id={`${skill.name}_${idx}`} type="radio" aria-checked={skill.proficient ? true : false} checked={skill.proficient ? true : false}/>
                        <label htmlFor={`${skill.name}_${idx}`}>{`${skill.name}_${idx}`}</label>
                    </div>
                </li>
            </>
        })
    };

    return(
        <>
            <div>
                <p>Proficiency Bonus: {profBonus}</p>
                <p>Inspiration:</p>
            </div>
            <div>
                <p>Strength: {statBlock.strength}</p><br/>
                <p>{formatStats(statBlock.strength)}</p>
                <ul>{listSkills(strengthSkills)}</ul>
            </div>
            <div>
                <p>Dexterity: {statBlock.dexterity}</p>
                <p>{formatStats(statBlock.dexterity)}</p>
                <ul>{listSkills(dexteritySkills)}</ul>
            </div>
            <div>
                <p>Constitution: {statBlock.constitution}</p>
                <p>{formatStats(statBlock.constitution)}</p>
                <ul>{listSkills(constitutionSkills)}</ul>
            </div>
            <div>
                <p>Intelligence: {statBlock.intelligence}</p>
                <p>{formatStats(statBlock.intelligence)}</p>
                <ul>{listSkills(intelligenceSkills)}</ul>
            </div>
            <div>
                <p>Wisdom: {statBlock.wisdom}</p>
                <p>{formatStats(statBlock.wisdom)}</p>
                <ul>{listSkills(wisdomSkills)}</ul>
            </div>
            <div>
                <p>Charisma: {statBlock.charisma}</p>
                <p>{formatStats(statBlock.charisma)}</p>
                <ul>{listSkills(charismaSkills)}</ul>
            </div>
            <div>
                <p>Passive Wisdon: (passiveWisdom)</p>
            </div>
        </>
    )
}
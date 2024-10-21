'use client'
import {useState, useEffect} from 'react';

export default function CharacterBio(){
    const [charName, setCharName] = useState('Jane Doe');
    const [charClass, setCharClass] = useState('Fighter');
    const [charLevel, setCharLevel] = useState('Level 1');
    const [charRace, setCharRace] = useState('Human');
    const [charExpPoints, setCharExpPoints] = useState(1);
    const [charAlignment, setCharAlignment] = useState('Chaotic Evil');
    const [charBackground, setCharBackground] = useState('Outlander');
    const [playerName, setPlayerName] = useState('Chris');

    useEffect(() => {
        setCharName('Rolen Everwood');
    }, []);

    function getLevelFromXP(expPoints:number) {
        switch (true) {
          case expPoints < 0:
            return "Invalid XP. Experience points cannot be negative.";
          case expPoints < 300:
            return "Level 1: Novice adventurer, just starting your journey.";
          case expPoints < 900:
            return "Level 2: Gaining experience, starting to find your footing.";
          case expPoints < 2_700:
            return "Level 3: Becoming a skilled adventurer, capable of basic challenges.";
          case expPoints < 6_500:
            return "Level 4: Developing abilities more deeply.";
          case expPoints < 14_000:
            return "Level 5: Seasoned adventurer, capable of facing serious threats.";
          case expPoints < 23_000:
            return "Level 6: Skills improving, access to more powerful abilities.";
          case expPoints < 34_000:
            return "Level 7: Respected member of your adventuring party.";
          case expPoints < 48_000:
            return "Level 8: Power growing, able to take on formidable foes.";
          case expPoints < 64_000:
            return "Level 9: Nearing the peak of your abilities.";
          case expPoints < 85_000:
            return "Level 10: A hero in your own right, sought after for your skills.";
          case expPoints < 100_000:
            return "Level 11: Continuing to gain recognition and power.";
          case expPoints < 120_000:
            return "Level 12: Mastering your class abilities.";
          case expPoints < 140_000:
            return "Level 13: Highly skilled, capable of facing great challenges.";
          case expPoints < 165_000:
            return "Level 14: Becoming legendary in your adventures.";
          case expPoints < 195_000:
            return "Level 15: A seasoned hero, capable of facing the toughest foes.";
          case expPoints < 225_000:
            return "Level 16: A leader among adventurers.";
          case expPoints < 265_000:
            return "Level 17: Master of your craft.";
          case expPoints < 305_000:
            return "Level 18: An inspiration to others.";
          case expPoints < 355_000:
            return "Level 19: A true legend in your own right.";
          case expPoints >= 355_000:
            return "Level 20: The pinnacle of your class, a legendary figure in the realms.";
          default:
            return "Invalid XP. Please enter a valid experience point amount.";
        }
    }

    return(
        <div className="flex">
            <div>
                <p>Character Name: {charName}</p>
                <p>Class: {charClass}</p>
                <p>Level: {getLevelFromXP(charExpPoints)}</p>
                <p>Background: {charBackground}</p>
                <p>Player Name: {playerName}</p>
                <p>Race / Species: {charRace}</p>
                <p>Alignment: {charAlignment}</p>
                <p>Experience Points: {charExpPoints}</p>
            </div>
        </div>
    )
}
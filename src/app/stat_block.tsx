

export default function statBlock(){

    //TO DO : ADD TABLE OF SKILLS; USE CHATGPT TO MAKE THE TABLE

    function formatStats(score:number){
        let newStat:number;
        switch(true){
            case (score >= 30):
            return +10; // Maximum modifier for scores above 30
            case (score >= 28):
            return +9;
            case (score >= 26):
            return +8;
            case (score >= 24):
            return +7;
            case (score >= 22):
            return +6;
            case (score >= 20):
            return +5;
            case (score >= 18):
            return +4;
            case (score >= 16):
            return +3;
            case (score >= 14):
            return +2;
            case (score >= 12):
            return +1;
            case (score >= 10):
            return 0;
            case (score >= 8):
            return -1;
            case (score >= 6):
            return -2;
            case (score >= 4):
            return -3;
            case (score >= 2):
            return -4;
            default:
            return -5; // For scores below 2
        }

    }

    return(
        <>
            <div>
                <p>Proficiency Bonus:</p>
                <p>Inspiration:</p>
            </div>
            <div>
                <p>Strength: 10</p><br/>
                <p>0</p>
            </div>
            <div>
                <p>Dexterity: 18</p>
                <p>+4</p>
            </div>
            <div>
                <p>Constitution: 14</p>
                <p>+2</p>
            </div>
            <div>
                <p>Intelligence: 9</p>
                <p>0</p>
            </div>
            <div>
                <p>Charisma: 18</p>
                <p>0</p>
            </div>
            <div>
                <p>Charisma: 18</p>
                <p>0</p>
            </div>
            <div>
                <p>Passive Wisdon: 18</p>
            </div>
        </>
    )
}
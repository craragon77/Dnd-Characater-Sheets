import Image from "next/image";
import CombatBlock from './combat_block';
import StatBlock from './stat_block';
import CharacterBio from './char_bio';

export default function Home() {
  return (
    <div>
      <CharacterBio/>
      <div>
        <StatBlock/>
      </div>
    </div>
  );
}

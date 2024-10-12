import Image from "next/image";
import CombatBlock from './combat_block';
import StatBlock from './stat_block';

export default function Home() {
  return (
    <div>
      <p>Good morning dave</p>
      <StatBlock/>
    </div>
  );
}

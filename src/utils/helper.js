var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function generateRandomName() {
  let finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const imgList = [
  "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
  "https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png",
  "https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
  "https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png",
  "https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png",
  "https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png",
  "https://www.kasandbox.org/programming-images/avatars/primosaur-tree.png",
  "https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png",
  "https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png",
  "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
  "https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png",
  "https://www.kasandbox.org/programming-images/avatars/mr-pants.png",
  "https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png",
  "https://www.kasandbox.org/programming-images/avatars/mr-pants-green.png",
  "https://www.kasandbox.org/programming-images/avatars/marcimus.png",
  "https://www.kasandbox.org/programming-images/avatars/marcimus-red.png",
  "https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png",
  "https://www.kasandbox.org/programming-images/avatars/marcimus-orange.png",
  "https://www.kasandbox.org/programming-images/avatars/duskpin-ultimate.png",
  "https://www.kasandbox.org/programming-images/avatars/duskpin-tree.png",
  "https://www.kasandbox.org/programming-images/avatars/duskpin-seedling.png",
  "https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png",
  "https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png",
];

export function generateRandomImg() {
  let finalImg = imgList[Math.floor(Math.random() * imgList.length)];
  return finalImg;
}

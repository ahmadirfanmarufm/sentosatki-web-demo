import { MdFactory, MdDryCleaning, MdBabyChangingStation, MdElderly, MdForest } from 'react-icons/md';
import { GiVacuumCleaner } from 'react-icons/gi';
import { FaHouseUser, FaHatCowboy } from "react-icons/fa";
import { PiCookingPotFill } from 'react-icons/pi';
import { GiLovers, GiLuckyFisherman, GiFarmer, GiFishingBoat } from 'react-icons/gi';
import { BsPersonWorkspace } from "react-icons/bs";
import { RiNurseFill } from "react-icons/ri";
import { LuConstruction } from "react-icons/lu";

const jobsCategories = [
    {
        name: 'Welder 3G / 4G',
        icon: MdFactory,
    },
    {
        name: 'Domestic Worker',
        icon: MdDryCleaning,
    },
    {
        name: 'House Maid',
        icon: GiVacuumCleaner,
    },
    {
        name: 'Babysitter',
        icon: MdBabyChangingStation,
    },
    {
        name: 'Elderly',
        icon: MdElderly,
    },
    {
        name: 'House Keeper',
        icon: FaHouseUser,
    },
    {
        name: 'Family Cook',
        icon: PiCookingPotFill,
    },
    {
        name: 'Caregiver',
        icon: GiLovers,
    },
    {
        name: 'Operator Worker',
        icon: BsPersonWorkspace,
    },
    {
        name: 'Nursing Home',
        icon: RiNurseFill,
    },
    {
        name: 'Fisherman',
        icon: GiLuckyFisherman,
    },
    {
        name: 'Construction',
        icon: LuConstruction,
    },
    {
        name: 'Argiculture',
        icon: GiFarmer,
    },
    {
        name: 'Aquaculture',
        icon: GiFishingBoat,
    },
    {
        name: 'Livestock',
        icon: FaHatCowboy,
    },
    {
        name: 'Forestry',
        icon: MdForest,
    },
];

export { jobsCategories }
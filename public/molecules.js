// --- MOLECULE DATABASE ---
const molecules = [
    {
       id: "h2o",
       formula: "H₂O",
       name: "Water",
       polarity: "Polar",
       geometry: "Bent",
       angle: "104.5°",
       hybridization: "sp³",
       description: "Water is polar due to the large electronegativity difference between Oxygen and Hydrogen, plus its asymmetrical bent shape caused by two lone pairs on Oxygen.",
       image: "img/h2o.webp"
   },
   {
       id: "co2",
       formula: "CO₂",
       name: "Carbon Dioxide",
       polarity: "Nonpolar",
       geometry: "Linear",
       angle: "180°",
       hybridization: "sp",
       description: "Although C=O bonds are polar, the molecule is perfectly symmetrical and linear. The dipole moments cancel each other out.",
       image: "img/co2.webp"
   },
   {
       id: "nh3",
       formula: "NH₃",
       name: "Ammonia",
       polarity: "Polar",
       geometry: "Trigonal Pyramidal",
       angle: "107°",
       hybridization: "sp³",
       description: "The lone pair on the Nitrogen atom pushes the Hydrogen atoms down, creating an asymmetrical shape and a net dipole moment.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/bb/Ammonia-2D-dimensions.svg/1280px-Ammonia-2D-dimensions.svg.png"
   },
   {
       id: "ch4",
       formula: "CH₄",
       name: "Methane",
       polarity: "Nonpolar",
       geometry: "Tetrahedral",
       angle: "109.5°",
       hybridization: "sp³",
       description: "Methane is nonpolar because of its symmetrical tetrahedral geometry. The slight dipoles of the C-H bonds cancel out in 3D space.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Methane-2D-dimensions.svg/1024px-Methane-2D-dimensions.svg.png"
   },
   {
       id: "bf3",
       formula: "BF₃",
       name: "Boron Trifluoride",
       polarity: "Nonpolar",
       geometry: "Trigonal Planar",
       angle: "120°",
       hybridization: "sp²",
       description: "BF3 is an exception to the octet rule. It forms a symmetrical flat triangle (Trigonal Planar), so the polar B-F bonds cancel out.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Boron-trifluoride-2D-dimensions.svg/1024px-Boron-trifluoride-2D-dimensions.svg.png"
   },
   {
       id: "sf6",
       formula: "SF₆",
       name: "Sulfur Hexafluoride",
       polarity: "Nonpolar",
       geometry: "Octahedral",
       angle: "90°",
       hybridization: "sp³d²",
       description: "Sulfur Hexafluoride is nonpolar. Six Fluorine atoms are arranged symmetrically around the Sulfur atom, cancelling all dipoles.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sulfur-hexafluoride-2D-dimensions.svg/1024px-Sulfur-hexafluoride-2D-dimensions.svg.png"
   },
   {
       id: "so2",
       formula: "SO₂",
       name: "Sulfur Dioxide",
       polarity: "Polar",
       geometry: "Bent",
       angle: "<120°",
       hybridization: "sp²",
       description: "SO2 is polar because of the lone pair on the central Sulfur atom, which creates a bent shape and uneven charge distribution.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sulfur-dioxide-2D-dimensions.svg/1024px-Sulfur-dioxide-2D-dimensions.svg.png"
   },
   {
       id: "pcl5",
       formula: "PCl₅",
       name: "Phosphorus Pentachloride",
       polarity: "Nonpolar",
       geometry: "Trigonal Bipyramidal",
       angle: "90° & 120°",
       hybridization: "sp³d",
       description: "PCl5 is nonpolar. The 5 Chlorine atoms are arranged symmetrically (3 equatorial, 2 axial), cancelling out the bond dipoles.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Phosphorus-pentachloride-2D-dimensions.svg/1024px-Phosphorus-pentachloride-2D-dimensions.svg.png"
   },
   {
       id: "so3",
       formula: "SO₃",
       name: "Sulfur Trioxide",
       polarity: "Nonpolar",
       geometry: "Trigonal Planar",
       angle: "120°",
       hybridization: "sp²",
       description: "SO3 is nonpolar. Due to resonance, all S-O bonds are identical, and the molecule forms a symmetrical flat triangle.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sulfur-trioxide-2D-dimensions.svg/1024px-Sulfur-trioxide-2D-dimensions.svg.png"
   },
   {
       id: "hcl",
       formula: "HCl",
       name: "Hydrochloric Acid",
       polarity: "Polar",
       geometry: "Linear",
       angle: "180°",
       hybridization: "N/A",
       description: "HCl is a simple diatomic molecule. Chlorine is much more electronegative than Hydrogen, creating a permanent dipole.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hydrogen-chloride-2D-dimensions.svg/1024px-Hydrogen-chloride-2D-dimensions.svg.png"
   },
   {
       id: "o3",
       formula: "O₃",
       name: "Ozone",
       polarity: "Polar",
       geometry: "Bent",
       angle: "116.8°",
       hybridization: "sp²",
       description: "Even though it consists only of Oxygen, Ozone is polar. The central oxygen has a lone pair, causing a bent shape and resonance.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ozone-1.1.7-2D-dimensions.svg/1024px-Ozone-1.1.7-2D-dimensions.svg.png"
   },
   {
       id: "xef4",
       formula: "XeF₄",
       name: "Xenon Tetrafluoride",
       polarity: "Nonpolar",
       geometry: "Square Planar",
       angle: "90°",
       hybridization: "sp³d²",
       description: "XeF4 is nonpolar. The two lone pairs on Xenon are 180° apart (cancelling), and the 4 Fluorines are in a plane (cancelling).",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Xenon-tetrafluoride-2D-dimensions.svg/1024px-Xenon-tetrafluoride-2D-dimensions.svg.png"
   },
   {
       id: "ccl4",
       formula: "CCl₄",
       name: "Carbon Tetrachloride",
       polarity: "Nonpolar",
       geometry: "Tetrahedral",
       angle: "109.5°",
       hybridization: "sp³",
       description: "CCl4 is nonpolar. It has the same symmetrical tetrahedral structure as Methane (CH4), so the polar C-Cl bonds cancel out.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Carbon-tetrachloride-2D-dimensions.svg/1024px-Carbon-tetrachloride-2D-dimensions.svg.png"
   },
   {
       id: "chcl3",
       formula: "CHCl₃",
       name: "Chloroform",
       polarity: "Polar",
       geometry: "Tetrahedral",
       angle: "109.5°",
       hybridization: "sp³",
       description: "Chloroform is polar. The symmetry is broken because Chlorine atoms pull electrons much stronger than the Hydrogen atom.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chloroform-2D-dimensions.svg/1024px-Chloroform-2D-dimensions.svg.png"
   },
   {
       id: "hcn",
       formula: "HCN",
       name: "Hydrogen Cyanide",
       polarity: "Polar",
       geometry: "Linear",
       angle: "180°",
       hybridization: "sp",
       description: "HCN is polar. It is linear, but Nitrogen is very electronegative, pulling electron density towards one end of the molecule.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hydrogen-cyanide-2D-dimensions.svg/1024px-Hydrogen-cyanide-2D-dimensions.svg.png"
   },
   {
       id: "ch2o",
       formula: "CH₂O",
       name: "Formaldehyde",
       polarity: "Polar",
       geometry: "Trigonal Planar",
       angle: "120°",
       hybridization: "sp²",
       description: "Formaldehyde is polar. The Oxygen atom is much more electronegative than Carbon and Hydrogen, creating a strong dipole.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Formaldehyde-2D-dimensions.svg/1024px-Formaldehyde-2D-dimensions.svg.png"
   },
   {
       id: "c2h4",
       formula: "C₂H₄",
       name: "Ethylene",
       polarity: "Nonpolar",
       geometry: "Trigonal Planar",
       angle: "120°",
       hybridization: "sp²",
       description: "Ethylene is nonpolar. It is a symmetrical planar molecule with a double bond, so charge distribution is even.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ethylene-2D-dimensions.svg/1024px-Ethylene-2D-dimensions.svg.png"
   },
   {
       id: "c2h2",
       formula: "C₂H₂",
       name: "Acetylene",
       polarity: "Nonpolar",
       geometry: "Linear",
       angle: "180°",
       hybridization: "sp",
       description: "Acetylene is nonpolar. It has a linear structure with a triple bond and is perfectly symmetrical.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Acetylene-2D-dimensions.svg/1024px-Acetylene-2D-dimensions.svg.png"
   },
   {
       id: "o2",
       formula: "O₂",
       name: "Oxygen Gas",
       polarity: "Nonpolar",
       geometry: "Linear",
       angle: "180°",
       hybridization: "sp²",
       description: "O2 is nonpolar because it consists of two identical atoms sharing electrons equally.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dioxygen-2D-dimensions.svg/1024px-Dioxygen-2D-dimensions.svg.png"
   },
   {
       id: "n2",
       formula: "N₂",
       name: "Nitrogen Gas",
       polarity: "Nonpolar",
       geometry: "Linear",
       angle: "180°",
       hybridization: "sp",
       description: "Nitrogen gas is nonpolar. The two Nitrogen atoms form a triple bond and share electrons equally.",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dinitrogen-2D-dimensions.svg/1024px-Dinitrogen-2D-dimensions.svg.png"
   }
];
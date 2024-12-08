// import { useState } from 'react';
// import { FaUser as UserIcon, FaHeart as HeartIcon } from 'react-icons/fa'; // Example using Font Awesome icons
// import { SearchBox, ShoppingCartButton, UserButton, SignInButton } from './YourComponents'; // Replace with actual imports

// const MobileNav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-blueviolet text-white px-4 py-3 fixed w-full z-10 shadow-md">
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold">Avion</div>

//         {/* Hamburger Menu Toggle */}
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden mt-4 bg-white text-slate-700 shadow-md rounded-md">
//           <div className="flex flex-col items-center py-4 space-y-4">
//             <SearchBox />
//             <div className="hover:text-blueviolet cursor-pointer">Plant Pots</div>
//             <div className="hover:text-blueviolet cursor-pointer">Ceramics</div>
//             <div className="hover:text-blueviolet cursor-pointer">Tables</div>
//             <div className="hover:text-blueviolet cursor-pointer">Chairs</div>
//             <div className="hover:text-blueviolet cursor-pointer">Crockery</div>
//             <div className="hover:text-blueviolet cursor-pointer">Tableware</div>
//             <div className="hover:text-blueviolet cursor-pointer">Cutlery</div>
//             <HeartIcon size={26} className="text-blueviolet cursor-pointer" />
//             <ShoppingCartButton />

//             {/* User Authentication */}
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//             <SignedOut>
//               <SignInButton>
//                 <UserIcon size={26} className="cursor-pointer text-blueviolet" />
//               </SignInButton>
//             </SignedOut>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default MobileNav;

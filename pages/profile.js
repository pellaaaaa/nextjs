import dynamic from "next/dynamic";
// import Image from "next/image";
const LayoutComponent = dynamic(() => import("@/layout"));

export default function Profile() {
 return (
  <div>
    
   <LayoutComponent metaTitle="Profile" metaDescription="semua informasi ini seputar profile user">
    <p>Profile</p>
    {/* <Image src="/icon-nextjs.png" width={400} height={400} alt="next img"/>
    <img src="/icon-nextjs.png" style={{width:400, height:400}} alt="next img"></img> */}
   </LayoutComponent>
  </div>
 );
}
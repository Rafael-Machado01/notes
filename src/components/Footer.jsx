export default function Footer() {
   const year = new Date().getFullYear()
   return (
      <footer className="container-fluid primary-black text-center">
         <p>Copyright © {year} Just a Notes.</p>
      </footer>
   )
}
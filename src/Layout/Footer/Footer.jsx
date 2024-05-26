const Footer = () => {
  return (
    <div>
      <footer className="p-10 flex justify-evenly   bg-[#1f2329] text-gray-400 ">
        <nav className="flex flex-col w-full ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col w-full ">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col w-full ">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">career</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="bg-[#1f2329] text-gray-400 px-10 py-4 footer">
        <aside className="items-center grid-flow-col gap-4">
          <p>Copyright KFC, All Rights Reserved</p>
          <p>All Of Our Oroducts Have HALAL Certificate From TSE</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

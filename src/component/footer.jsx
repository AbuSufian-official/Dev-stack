import logo from './../assets/logo-text.png'



const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto container px-6 pt-12 pb-8 lg:px-0">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            
            <img src={logo} alt="Dev Stack"/>

            <p className="mt-4 max-w-[350px] text-[14px] leading-[18px] text-[#7A879F]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="text-[14px] font-medium text-[#34415A] transition-colors duration-200 hover:text-[#D91B7E]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[14px] font-medium text-[#34415A] transition-colors duration-200 hover:text-[#D91B7E]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[14px] font-medium text-[#34415A] transition-colors duration-200 hover:text-[#D91B7E]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wide text-[#182238]">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wide text-[#182238]">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wide text-[#182238]">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#71809A] transition-colors duration-200 hover:text-[#D91B7E]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#EDF0F5]"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-[#9AA7BC]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[14px] text-[#9AA7BC] transition-colors duration-200 hover:text-[#D91B7E]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[14px] text-[#9AA7BC] transition-colors duration-200 hover:text-[#D91B7E]"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



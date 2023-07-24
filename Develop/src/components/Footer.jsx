//this is my footer

//links for github and linkedin


const Footer = () => {
    return (
      <footer className="w-100 mt-auto p-4" id="footer">
        <div className="container text-center mb-5" id="cont">
          <h4 id="love">
            Made with{' '}
            <span
              className="emoji"
              role="img"
              aria-label="heart"
              aria-hidden="false"
            >
              ❤️
            </span>{' '}
            
          </h4>
          <ul className="mt-3 text-lg font-medium text-white-900 dark:text-gray-900 sm:mt-0">
          <li>
            <a
              href="https://github.com/laurenmiller389/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lauren-miller-6b435a1b9/"
              className="mr-4 hover:underline md:mr-6 "
            >
              LinkedIn
            </a>
          </li>
        </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
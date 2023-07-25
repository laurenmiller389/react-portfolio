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
          <ul className="mt-3 list-unstyled list-inline text-lg font-weight-bold text-white-900">
          <li className="list-inline-item">
            <a
              href="https://github.com/laurenmiller389/"
              className="text-decoration-none mr-4"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lauren-miller-6b435a1b9/"
              className="text-decoration-none mr-4"
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
import "../styles/Footer.css";

const Footer = () => {
  const links = [
    {
      title: "Check me out on:",
      src: "https://github.com/melmesery/",
      name: "Github",
    },
    {
      title: "For urgents:",
      src: "https://wa.me/201270278442",
      name: "Whatsapp",
    },
    {
      title: "Follow me here:",
      srcs: [
        {
          src: "https://www.facebook.com/e.mesery/",
          name: "Facebook",
        },
        {
          src: "https://www.instagram.com/mhmd_elmesery/",
          name: "Instagram",
        },
      ],
    },
    {
      title: "And reach me out on:",
      src: "https://www.linkedin.com/in/melmesery/",
      name: "LinkedIn",
    },
  ];

  return (
    <footer>
      <p>
        Want to get in touch and talk about one of my projects, opportunities,
        or just feel like chatting?
      </p>

      <p>Feel free to email me: muhamed.elmesery@gmail.com</p>

      {links?.map((link) => (
        <div className="footer-links">
          <p key={link.title}>{link.title}</p>
          <a href={link.src} target="_blank">
            {link.name}
          </a>
          {link.srcs?.map((item) => (
            <a href={item.src} target="_blank" key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
      ))}

      <p>All Rights Reserved &copy; Mohamed El-Mesery</p>
    </footer>
  );
};

export default Footer;

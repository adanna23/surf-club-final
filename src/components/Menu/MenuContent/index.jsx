import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import { Facebook, Instagram, Youtube } from "react-feather";
import cn from "classnames";
import { Link } from "react-router-dom";

// import ftw from "../../../assets/ftw.png";
// import man1 from "../../../assets/men1.JPG";
// import man2 from "../../../assets/men2.JPG";
// import man3 from "../../../assets/men3.JPG";
// import man4 from "../../../assets/men4.JPG";

import "./style.scss";

const internalLinks = [
  {
    url: "#1",
    component: <span>Shop</span>,
    img: "https://drive.google.com/file/d/1O8dxmv1JZIpjlHE4Ly4YTsExQFW5G4CG/view?usp=share_link",
    // "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    url: "#2",
    component: (
      <span>
        FTW
        {/* FTW<img src={ftw} />{" "} */}
      </span>
    ),
    img: "https://drive.google.com/file/d/1O8dxmv1JZIpjlHE4Ly4YTsExQFW5G4CG/view?usp=share_link",
    // "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
  },
  {
    url: "#3",
    component: (
      <span>
        <Link to="/About">About</Link>
      </span>
    ),
    img: "https://drive.google.com/file/d/1O8dxmv1JZIpjlHE4Ly4YTsExQFW5G4CG/view?usp=share_link",
    // "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    url: "#4",
    component: (
      <span>
        <Link to="/Contact">Contact</Link>
      </span>
    ),
    img: "https://drive.google.com/file/d/1O8dxmv1JZIpjlHE4Ly4YTsExQFW5G4CG/view?usp=share_link",
    // "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
  },
  {
    url: "#5",
    component: <span>Cart</span>,
    img: "https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
];

const externalLinks = [
  {
    url: "www.facebook.com",
    component: <Facebook />,
  },
  {
    url: "www.instagram.com",
    component: <Instagram />,
  },
  {
    url: "www.youtube.com",
    component: <Youtube />,
  },
  // {
  //   url: "www.dribbble.com",
  //   component: <Dribbble />,
  // },
  // {
  //   url: "www.twitch.com",
  //   component: <Twitch />,
  // },
];

export default function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
                <img src={link.img} />
              </li>
            ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

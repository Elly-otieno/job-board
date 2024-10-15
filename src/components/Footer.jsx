import React from "react";
import headerImage from "../assets/images/crypto-icon.svg";
import facebook from "../assets/images/facebook.svg";
import x from "../assets/images/x.svg";
import discord from "../assets/images/discord.svg";
import telegram from "../assets/images/telegram.svg";

function Footer() {
  const items = [
    {
      name: "Menu Item",
      links: ["Menu link", "Another link", "Third menu", "Fourth Link"],
    },
    {
      name: "Second Item",
      links: [
        "Menu link",
        "Not just another link",
        "External menu link",
        "Fourth Link",
      ],
    },
    {
      name: "Third Menu Item",
      links: ["Menu link", "Another link", "Third menu", "Fourth Link"],
    },
  ];
  const images =[
    {
        image: x,
        link: 'www.x.com'
    },
    {
        image: facebook,
        link: 'www.facebook.com'
    },
    {
        image: discord,
        link: 'www.discord.com'
    },
    {
        image: telegram,
        link: 'www.telegram.com'
    }
  ]
  console.log(images);
  
  return (
    <footer>
      <div className="footer">
        <div className="footer-item">
          <div className="footer-content">
            <img src={headerImage} alt="Crypto Icon" className="footer-img" />
            <h2>cryptojob</h2>
          </div>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis dolor sit
            amet lorem.{" "}
          </p>
        </div>
        {items.map((item) => {
          return (
            <div key={item.name} className="footer-item footer-menu">
              <h2 className="menu-tag">{item.name}</h2>
              <ul>
                {item.links.map((link) => {
                  return (
                    <li key={link} className="list--item">
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <hr className="footer-line"/>
      <div className="footer--item">
        <p>&#169; 2024 cryptojob. All rights reserved</p>
        <div className="social">
            {images.map((image)=>{
                return (
                    <a key={image} href={image.link} > 
                        <img src={image.image} alt="Image" /> 
                    </a>
                )
            })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

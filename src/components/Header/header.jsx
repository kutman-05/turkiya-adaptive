import React from "react";
import "./media.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <div className="container">
          <div className="bg"></div>
          <div className="stanbu"></div>
          <div className="stanbul">
            <h1>
              Turkiya <br />
              Universitetlari
            </h1>
            <p>
              Dinamil va zamonaviy davlatda <br /> o'qing! Yevropa standartlari{" "}
              <br /> darajasidagi sifatli ta'lim. Yillik <br />
              kontraktlar 200$ dan boshlanadi.
            </p>
            <button>Batafsil</button>
            <h4>Qo'ngiroq qiling</h4>
          </div>
          <div className="tooltip-container">
            <div class="tooltip">
              <div class="profile">
                <div class="user"></div>
              </div>
            </div>
            <div class="text">
              <div class="parent ">
                <div class="child child-1">
                  <Link to={"https://t.me/grantsuzb"}>
                    <button class="button btn-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <defs>
                          <linearGradient
                            id="logosTelegram0"
                            x1="50%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#2aabee" />
                            <stop offset="100%" stop-color="#229ed9" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#logosTelegram0)"
                          d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"
                        />
                        <path
                          fill="#fff"
                          d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div class="child child-2">
                  <Link
                    to={
                      "https://www.instagram.com/aliaskar.musafir?igsh=NTc4MTIwNjQ2YQ=="
                    }
                  >
                    <button class="button btn-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        fill="#ff00ff"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
                <div class="child child-3">
                  <Link
                    to={"https://youtube.com/@aliaskar6463?si=DhKoteyuYmvnInCF"}
                  >
                    <button class="button btn-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.43em"
                        height="1em"
                        viewBox="0 0 256 180"
                      >
                        <path
                          fill="#f00"
                          d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                        />
                        <path
                          fill="#fff"
                          d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div class="child child-4">
                  <button class="button btn-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                      fill="#4267B2"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

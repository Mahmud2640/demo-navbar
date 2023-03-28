import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <h1>AircityBD</h1>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <a href="/" class="logo">
              <span class="nav-item">AircityBD</span>
            </a>
          </li>
          <li>
            <a href="/home">
              <i class="fas fa-home"></i>
              <span class="nav-item">Home</span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <i class="fas fa-user"></i>
              <span class="nav-item">Profile</span>
            </a>
          </li>
          <li>
            <a href="/wallet">
              <i class="fas fa-wallet"></i>
              <span class="nav-item">Wallet</span>
            </a>
          </li>
          <li>
            <a href="/analytices">
              <i class="fas fa-chart-bar"></i>
              <span class="nav-item">Analytics</span>
            </a>
          </li>
          <li>
            <a href="/task">
              <i class="fas fa-tasks"></i>
              <span class="nav-item">Task</span>
            </a>
          </li>
          <li>
            <a href="/setting">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Setting</span>
            </a>
          </li>
          <li>
            <a href="/help">
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help</span>
            </a>
          </li>
          <li>
            <a href="/logout" class="logout">
              <i class="fas fa-sign-in-alt"></i>
              <span class="nav-item">Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

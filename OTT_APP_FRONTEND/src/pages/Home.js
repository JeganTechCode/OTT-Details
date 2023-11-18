import Logo from "../assets/images/logo.svg"
import Movie1 from "../assets/images/upcoming-1.png"
import Movie2 from "../assets/images/upcoming-2.png"
import Movie3 from "../assets/images/upcoming-3.png"
import Movie4 from "../assets/images/upcoming-4.png"

import Movie11 from "../assets/images/movie-1.png"
import Movie22 from "../assets/images/movie-2.png"
import Movie33 from "../assets/images/movie-3.png"
import Movie44 from "../assets/images/movie-4.png"
import Movie55 from "../assets/images/movie-5.png"
import Movie66 from "../assets/images/movie-6.png"
import Movie77 from "../assets/images/movie-7.png"
import Movie88 from "../assets/images/movie-8.png"

import Series1 from "../assets/images/series-1.png"
import Series2 from "../assets/images/series-2.png"
import Series3 from "../assets/images/series-3.png"
import Series4 from "../assets/images/series-4.png"

import Footerbottom from "../assets/images/footer-bottom-img.png"
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import {configuration} from '../config/urlDataConfig';

function Home() {

  const [moviesWithGenres, setMoviesWithGenres] = useState([]);

  useEffect(() => {
    const getTheAdvancedSearchResult = async () => {
      try {
        const response = await axios.get(`${configuration.BACKEND_LOCALHOST_SERVER}${configuration.BACKEND_RESTAPI_ADVANCED_SEARCH}`, {
          headers: {
            'X-RapidAPI-Key': configuration.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': configuration.X_RAPIDAPI_HOST
            // Add other headers if needed
          }
        });

        const movieListOfNamesAndImages = response.data.results;
        const moviesWithGenres = [];

        for (let i = 0; i < movieListOfNamesAndImages.length; i++) {
          const element = movieListOfNamesAndImages[i];
          const movieGenres = [];

          for (let j = 0; j < element.genre.length; j++) {
            const genreElement = element.genre[j];
            movieGenres.push(genreElement);
          }

          const movieData = {
            movie_image_url: element.imageurl[0],
            movie_title: element.title,
            movie_imdbid: element.imdbid,
            movie_imdbrating: element.imdbrating,
            movie_released: element.released,
            movie_synopsis: element.synopsis,
            movie_type: element.type,
            movie_genres: movieGenres
          };

          moviesWithGenres.push(movieData);
        }

        setMoviesWithGenres(moviesWithGenres);
      } catch (error) {
        if (error.response) {
          console.error('Response Error:', error.response.data);
        } else if (error.request) {
          console.error('Request Error:', error.request);
        } else {
          console.error('General Error:', error.message);
        }
      }
    };

    getTheAdvancedSearchResult();
  }, []);


  return (
    <div className="App">

      <header class="header" data-header>
        <div class="container">

          <div class="overlay" data-overlay></div>

          <a href="/" class="logo">
            <img src={Logo} alt="Filmlane logo" />
          </a>

          <div class="header-actions">

            <button class="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <div class="lang-wrapper">
              <label for="language">
                <ion-icon name="globe-outline"></ion-icon>
              </label>

              <select name="language" id="language">
                <option value="en">INDIA</option>
                {/* <option value="au">AU</option>
                <option value="ar">AR</option>
                <option value="tu">TU</option> */}
              </select>
            </div>

            <button class="btn btn-primary">Sign in</button>

          </div>

          <button class="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two"></ion-icon>
          </button>

          <nav class="navbar" data-navbar>

            <div class="navbar-top">

              <a href="/" class="logo">
                <img src={Logo} alt="Filmlane logo" />
              </a>

              <button class="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

            </div>

            <ul class="navbar-list">

              <li>
                <a href="/" class="navbar-link">Home</a>
              </li>

              <li>
                <a href="#" class="navbar-link">Movie</a>
              </li>

              <li>
                <a href="#" class="navbar-link">Tv Show</a>
              </li>

              <li>
                <a href="#" class="navbar-link">Web Series</a>
              </li>

              <li>
                <a href="#" class="navbar-link">Pricing</a>
              </li>

            </ul>

            <ul class="navbar-social-list">

              <li>
                <a href="#" class="navbar-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>

            </ul>

          </nav>

        </div>
      </header>





      <main>
        <article>


          <section class="hero">
            <div class="container">

              <div class="hero-content">

                <p class="hero-subtitle">Filmlane</p>

                <h1 class="h1 hero-title">
                  Unlimited <strong>Movie</strong>, TVs Shows, & More.
                </h1>

                <div class="meta-wrapper">

                  <div class="badge-wrapper">
                    <div class="badge badge-fill">PG 18</div>

                    <div class="badge badge-outline">HD</div>
                  </div>

                  <div class="ganre-wrapper">
                    <a href="#">Romance,</a>

                    <a href="#">Drama</a>
                  </div>

                  <div class="date-time">

                    <div>
                      <ion-icon name="calendar-outline"></ion-icon>

                      <time datetime="2022">2022</time>
                    </div>

                    <div>
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="PT128M">128 min</time>
                    </div>

                  </div>

                </div>

                <button class="btn btn-primary">
                  <ion-icon name="play"></ion-icon>

                  <span>Watch now</span>
                </button>

              </div>

            </div>
          </section>







          <section class="top-rated">
            <div class="container">

              <p class="section-subtitle">Online Streaming</p>

              <h2 class="h2 section-title">Top Rated Movies</h2>


              <ul class="movies-list">

                {moviesWithGenres.map((movie, index) => (
                  <li key={index}>
                   <Link to={'/movie-details/' + movie.movie_imdbid}>
                      <div class="movie-card">

                        <a href="/movie-details">
                          <figure class="card-banner">
                            <img src={movie.movie_image_url} alt={movie.movie_title} />
                          </figure>
                        </a>

                        <div class="title-wrapper">
                          <a href="/movie-details">
                            <h3 class="card-title">{movie.movie_title}</h3>
                          </a>

                          <time datetime="2022">{movie.movie_released}</time>
                        </div>

                        <div class="card-meta">
                          <div class="badge badge-outline">{movie.movie_genres.join(', ')}</div>

                          <div class="duration">
                            {/* <ion-icon name="time-outline"></ion-icon>

                          <time datetime="PT137M">137 min</time> */}
                          </div>

                          <div class="rating">
                            <ion-icon name="star"></ion-icon>

                            <data>{movie.movie_imdbrating}</data>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </li>

                ))}

              </ul>

            </div>
          </section>





          {/* <section class="tv-series">
            <div class="container">

              <p class="section-subtitle">Best TV Series</p>

              <h2 class="h2 section-title">World Best TV Series</h2>

              <ul class="movies-list">

                <li>
                  <div class="movie-card">

                    <a href="/movie-details">
                      <figure class="card-banner">
                        <img src={Series1} alt="Moon Knight movie poster" />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="/movie-details">
                        <h3 class="card-title">Moon Knight</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT47M">47 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.6</data>
                      </div>
                    </div>

                  </div>
                </li>

                <li>
                  <div class="movie-card">

                    <a href="/movie-details">
                      <figure class="card-banner">
                        <img src={Series2} alt="Halo movie poster" />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="/movie-details">
                        <h3 class="card-title">Halo</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT59M">59 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.8</data>
                      </div>
                    </div>

                  </div>
                </li>

                <li>
                  <div class="movie-card">

                    <a href="/movie-details">
                      <figure class="card-banner">
                        <img src={Series3} alt="Vikings: Valhalla movie poster" />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="/movie-details">
                        <h3 class="card-title">Vikings: Valhalla</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT51M">51 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.3</data>
                      </div>
                    </div>

                  </div>
                </li>

                <li>
                  <div class="movie-card">

                    <a href="/movie-details">
                      <figure class="card-banner">
                        <img src={Series4} alt="Money Heist movie poster" />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="/movie-details">
                        <h3 class="card-title">Money Heist</h3>
                      </a>

                      <time datetime="2017">2017</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">4K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT70M">70 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.3</data>
                      </div>
                    </div>

                  </div>
                </li>

              </ul>

            </div>
          </section> */}






          <section class="cta">
            <div class="container">

              <div class="title-wrapper">
                <h2 class="cta-title">Trial start first 30 days.</h2>

                <p class="cta-text">
                  Enter your email to create or restart your membership.
                </p>
              </div>

              <form action="" class="cta-form">
                <input type="email" name="email" required placeholder="Enter your email" class="email-field" />

                <button type="submit" class="cta-form-btn">Get started</button>
              </form>

            </div>
          </section>

        </article>
      </main>



      <footer class="footer">

        <div class="footer-top">
          <div class="container">

            <div class="footer-brand-wrapper">

              <a href="/" class="logo">
                <img src={Logo} alt="Filmlane logo" />
              </a>

              <ul class="footer-list">

                <li>
                  <a href="/" class="footer-link">Home</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Movie</a>
                </li>

                <li>
                  <a href="#" class="footer-link">TV Show</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Web Series</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Pricing</a>
                </li>

              </ul>

            </div>

            <div class="divider"></div>

            <div class="quicklink-wrapper">

              <ul class="quicklink-list">

                <li>
                  <a href="#" class="quicklink-link">Faq</a>
                </li>

                <li>
                  <a href="#" class="quicklink-link">Help center</a>
                </li>

                <li>
                  <a href="#" class="quicklink-link">Terms of use</a>
                </li>

                <li>
                  <a href="#" class="quicklink-link">Privacy</a>
                </li>

              </ul>

              <ul class="social-list">

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

              </ul>

            </div>

          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">

            <p class="copyright">
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>

            <img src={Footerbottom} alt="Online banking companies logo" class="footer-bottom-img" />

          </div>
        </div>

      </footer>







      <a href="#top" class="go-top" data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </a>










    </div>
  );
}

export default Home;

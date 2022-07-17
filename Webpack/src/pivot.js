const headContent = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack Version</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <link rel="stylesheet" href="../css/index.css">
    <script src="../js/index.js" defer></script>
`;
const bodyContent = `
    <header>
        <img src="../images/logo.jpg">
        <div><i class="fas fa-user-astronaut"></i>Astronauts</div>
        <div><i class="fas fa-rocket"></i>Rockets</div>
        <div><i class="fas fa-meteor"></i>Metoers</div>
        <div><i class="fas fa-satellite-dish"></i>Dishes</div>
        <div><i class="fas fa-satellite"></i>Satellites</div>
    </header>

    <i class="fas fa-bars" onclick="openOrCloseMenu(this)"></i>

    <ul>
        <li>Astronauts</li>
        <li>Rockets</li>
        <li>Metoers</li>
        <li>Dishes</li>
        <li>Satellites</li>
    </ul>

    <img src="../images/logo.jpg">

    <section class="main-container">
        <aside>
            <img src="../images/logo.jpg">
            <div>
                <span><i class="fas fa-user-astronaut"></i>Astronauts</span>
                <span><i class="fas fa-rocket"></i>Rockets</span>
                <span><i class="fas fa-meteor"></i>Metoers</span>
                <span><i class="fas fa-satellite-dish"></i>Dishes</span>
                <span><i class="fas fa-satellite"></i>Satellites</span>

            </div>
            <div></div>
        </aside>


        <section>
            <section>
                <div>
                    <video src="../assets/vid.mp4" controls autoplay id="vid_player">
                    </video>
                </div>
            </section>

            <section>
                <article>
                    <div>
                        <i class="fas fa-play"></i>
                        <img src="https://i.ytimg.com/vi/TlpFzn_Y-F0/maxresdefault.jpg">
                    </div>
                    <h4>Skyhook</h4>
                    <p>Gravity is at your side</p>
                </article>

                <article>
                    <div>
                        <i class="fas fa-play"></i>
                        <img
                            src="http://p6.toutiaoimg.com/large/pgc-image/bb688f0be3974f778141dac88b91a382?from=detail&index=10">
                    </div>
                    <h4>Curvature Engine</h4>
                    <p>Faster than light with a new glance of the future of space traveling</p>
                </article>

                <article>
                    <div>
                        <i class="fas fa-play"></i>
                        <img src="https://scx2.b-cdn.net/gfx/news/hires/2018/neutronstarj.jpg">
                    </div>
                    <h4>Neutron Stars</h4>
                    <p>How does it form and why</p>
                </article>

                <article>
                    <div>
                        <i class="fas fa-play"></i>
                        <img src="https://nasainarabic.net/uploads/articles/64a699715391b9750166d3e8e940452d.png">
                    </div>
                    <h4>Lagrange Points</h4>
                    <p>Telescope Perfect Points </p>
                </article>
            </section>
        </section>
    </section>


    <footer>
        <span>
            <h4>Contact Us</h4>
            <p>cosmic-survival@info.com</p>
        </span>

        <span>
            <i class="fab fa-500px"></i>
            <i class="fab fa-adn"></i>
            <i class="fab fa-asymmetrik"></i>
        </span>
    </footer>
`;
document.body.innerHTML = bodyContent;
document.head.innerHTML = headContent;

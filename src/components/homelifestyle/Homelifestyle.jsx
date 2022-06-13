import "./homelifestyle.css";

export default function Homelifestyle() {
  return (
    <section className="container">
      <div id="lifestyles-New">
        <div className="thaw-1">
          <div>
            <h1>Lifestyle News</h1>
            <span className="Lifeline"></span>

            <div className="part-1">
              <div className="photo-exercise">
                <div className="exercise-photo">
                  <img
                    className="photo-ex1"
                    src="images/homeimgs/lifestyle.jpeg"
                    alt=""
                  />
                  <button className="life-exbtn">Exercise</button>
                </div>
                <div className="paragraph">
                  <h1>
                    Where does it come from effective from everyday regular
                    Exercise?
                  </h1>
                  <h4>Author name 31.5.2022</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal kfijik distribution of letters, as
                    opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="honey">
            <div className="honey-1">
              <img
                className="sunset-photo"
                src="images/homeimgs/lifestyle2.jpg"
                alt=""
              />
              <div className="honey-paragraph">
                <h1>Why do we use it?</h1>
                <p>
                  a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more
                </p>
              </div>
            </div>

            <div className="honey-2">
              <img
                className="food-photo"
                src="images/homeimgs/lifestyle4.jpg"
                alt=""
              />
              <div className="food-paragraph">
                <h1>Why do we use it?</h1>
                <p>
                  a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more
                </p>
              </div>
            </div>

            <div className="honey-3">
              <img
                className="camera-photo"
                src="images/homeimgs/lifestyle3.jpg"
                alt=""
              />
              <div className="camera-paragraph">
                <h1>Why do we use it?</h1>
                <p>
                  a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sponsered">
          <h4>Sponsered Content</h4>
          <span className="Lifeline1"></span>

          <div className="sponsered-1">
            <img
              className="beauty-photo"
              src="images/homeimgs/adver2.jpg"
              alt=""
            />
            <p>
              Cosmetic Pics That Prove Jennifer is a Timeless Beauty
              <h6>
                <i id="icon-1" className="uil uil-bell"></i>Sponsered by
              </h6>
            </p>
          </div>

          <div className="sponsered-2">
            <img className="phone-photo" src="images/homeimgs/ph2.jpg" alt="" />
            <p>
              Cosmetic Pics That Prove Jennifer is a Timeless Beauty
              <h6>
                <i id="icon-2" className="uil uil-bell"></i>Sponsered by
                <h3>Before</h3>
              </h6>
            </p>
          </div>

          <div className="sponsered-3">
            <img
              className="foodies-photo"
              src="images/homeimgs/lifestyle4.jpg"
              alt=""
            />
            <p>
              Cosmetic Pics That Prove Jennifer is a Timeless Beauty
              <h6>
                <i id="icon-3" className="uil uil-bell"></i>Sponsered by
                <h3>Before</h3>
              </h6>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

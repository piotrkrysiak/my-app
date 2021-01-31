import React from "react";
import "./Cards.css";
import { CardItem } from "./CardItem";

export const Cards = () => {
  return (
    <div className="cards">
      <h1>The most beautiful places in the world</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img1.jpg"
              text="Hawaii  is a U.S. state located in the Pacific Ocean. It is the only state outside North America, the only island state, and the only state in the tropics. Hawaii is also one of a handful of U.S. states to have once been an independent nation."
              path="//www.gohawaii.com/"
            />
            <CardItem
              src="images/img2.jpg"
              text="The Maldives is a nation of islands in the Indian Ocean, that spans across the equator. The country is comprised of 1192 islands that stretch along a length of 871 kilometers. While the country covers an area of approximately 90,000 square kilometers, only 298 square kilometers of that is dry land. The islands are grouped into a double chain of 26 atolls."
              path="//visitmaldives.com/en"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img3.jpg"
              text="Visiting Halong Bay and you can experience very diverse natural landscape, varying from long sandy beach to thousand-year-old-lime karst. Halong Bay covers nearly 1900 islets of different size, some very large such as Thien Cung Cave or Surprise Cave, others as small as a few meters wide. Discover what you will see as you make your way to this natural wonder."
              path="//www.visithalongbay.com/"
            />
            <CardItem
              src="images/img4.jpg"
              text="The pyramids of Giza were royal tombs built for three different pharaohs. The northernmost and oldest pyramid of the group was built for Khufu (Greek: Cheops), the second king of the 4th dynasty. Called the Great Pyramid, it is the largest of the three."
              path="//giza.fas.harvard.edu/"
            />
            <CardItem
              src="./images/img5.jpg"
              text="The Taj Mahal is a mausoleum complex in Agra, western Uttar Pradesh state, northern India. It is considered the finest example of Mughal architecture (a blend of Indian, Persian, and Islamic styles). The Taj Mahal is also one of the world's most iconic monuments, visited by millions of tourists each year. The complex was designated a UNESCO World Heritage site in 1983."
              path="//www.tajmahal.gov.in/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img6.jpg"
              text="Bora Bora is a volcanic island surrounded by a lagoon in 50 shades of blue. Rising from the seas in the heart of the South Pacific, Bora Bora is the jewel of French Polynesia: a tiny speck of an island a 50-minute flight from Tahiti, encased within one of the planet's most beautiful lagoons."
              path="//www.borabora.com/"
            />
            <CardItem
              src="images/img7.jpg"
              text="Iceland is an island, a European country, located midway between North America and mainland Europe. It lies just below the Arctic Circle between 64 and 66 degrees north. The capital is Reykjavik. It is the northernmost capital in the world and is located exactly halfway between New York and Moscow."
              path="//visiticeland.com"
            />
            <CardItem
              src="./images/img8.jpg"
              text="Located in Arizona, Grand Canyon National Park encompasses 277 miles (446 km) of the Colorado River and adjacent uplands. The park is home to much of the immense Grand Canyon; a mile (1.6 km) deep, and up to 18 miles (29 km) wide. Layered bands of colorful rock reveal millions of years of geologic history."
              path="//www.nps.gov/grca/index.htm"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

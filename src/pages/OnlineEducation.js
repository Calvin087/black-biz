import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardBooks from "../components/CardBooks";
import HeroInnerPage from "../components/HeroInnerPage";

const OnlineEducation = () => {
  {
    /* Start Of state */
  }
  const [bookLstings, setBookLstings] = useState([]);

  {
    /* End Of state */
  }

  {
    /* Start Of API Call */
  }
  const siteURL = "http://calvint2.sg-host.com/wp-json/wp/v2/books?per_page=50";

  useEffect(() => {
    async function loadlistings() {
      const response = await fetch(siteURL);

      if (!response.ok) {
        console.log("content not loaded");
        return;
      }

      const results = await response.json();
      setBookLstings(results);
    }
    loadlistings();
  }, []);
  {
    /* End Of API Call */
  }
  console.log(bookLstings);

  return (
    <div>
      <div className="sm:pt-6">
        <NavigationBar />
      </div>

      <HeroInnerPage
        bgColor={"#1e3142"}
        title={"Essential Reading"}
        content={
          "Financial literacy is the key to generational success and continued community growth. Our collection is for both children and adults."
        }
        bgImage={`url("../images/full-width-intro-books.jpg")`}
      />
      {/* Start Of Cards */}
      <div className="container m-auto p-4 sm:px-16 sm:flex sm:flex-wrap sm:justify-center">
        {bookLstings.map((book) => (
          <CardBooks key={book.id} {...book} />
        ))}
      </div>
      {/* End Of Cards */}
    </div>
  );
};

export default OnlineEducation;

// https://affiliate-program.amazon.co.uk/home/widgets/Amazon-QuickLinker-Widget

import { Link } from "react-router-dom";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  const DUMMY_FOOTER = [
    {
      group: "CUSTOMER SERVICES",
      items: [
        "Help & Contact us",
        "Returns & Refunds",
        "Online Stores",
        "Term & Conditions",
      ],
    },
    {
      group: "COMPANY",
      items: ["What We Do", "Available Services", "Latest Posts", "FAQs"],
    },
    {
      group: "SOCIAL MEDIA",
      items: ["Twitter", "Instagram", "Facebook", "Pinterest"],
    },
  ];
  return (
    <footer className={classes.footer}>
      {DUMMY_FOOTER.map((item) => (
        <nav className={classes.nav} key={item.group}>
          <h2>{item.group}</h2>
          <ul>
            <li>
              <Link to="#">{item.items[0]}</Link>
            </li>
            <li>
              <Link to="#">{item.items[1]}</Link>
            </li>
            <li>
              <Link to="#">{item.items[2]}</Link>
            </li>
            <li>
              <Link to="#">{item.items[3]}</Link>
            </li>
          </ul>
        </nav>
      ))}
    </footer>
  );
};

export default MainFooter;

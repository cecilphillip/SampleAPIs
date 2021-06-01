import { faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { APIData } from "../../utils/Interfaces";
import APICategories from "../APICategories/APICategories";

interface Props {
  api: APIData;
  featured?: boolean;
}

const APICard: React.FC<Props> = ({ api, featured = false }) => {
  return (
    <article className={`api-card ${featured ? "-featured" : ""}`}>
      <div className="api-card__inner">
        <APICategories categories={api.metaData.categories} />
        <header className="api-card__header">
          <h2 className="api-card__title">{api.metaData.title}</h2>
          <Link className="btn" href={`api-list/${api.link}`}>
            <a>
              <FontAwesomeIcon icon={faLink} />
            </a>
          </Link>
          {featured && (
            <span className="featured-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
          )}
        </header>
        <div className="api-card__desc">
          <p className="api-card__text">{api.metaData.desc}</p>
          <details className="api-card__endpoints">
            <summary>See available endpoints</summary>
            <ul>
              {api.endpoints.map((endpoint) => (
                <li key={endpoint} className="api-card__endpoint">
                  {endpoint}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </article>
  );
};

export default APICard;

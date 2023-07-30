import { MovieData } from "./Home";
import { useState, useEffect } from "react";
import { options } from "./Home";
import axios from "axios";
import Item from "../components/Item";

export default function List() {
  const [data, setData] = useState<MovieData[]>([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        "/v1/search/news.json?query=용띠",
        options
      );
      setData(data.items);
    }
    getData();
  }, []);

  return (
    <div>
      {data.map((elem, idx: number) => {
        return <Item data={elem} key={idx} />;
      })}
    </div>
  );
}

import axios from "axios";
import { apiUrlDashboard } from "../constants/urls";

export const fetchRandomCocktails = () => axios.get(apiUrlDashboard);

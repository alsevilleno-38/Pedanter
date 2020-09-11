import { index } from "./home";
import "!style-loader!css-loader!./style.css";
const $ = require("jquery");

alert(index);
$("body").append("<h1 class='clear'>This is a header</h1>");
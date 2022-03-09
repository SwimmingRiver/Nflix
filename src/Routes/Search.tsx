import { useLocation, useSearchParams } from "react-router-dom";
import { URLSearchParams } from "url";


function Search(){
    const [searchParams,_]=useSearchParams();
    const keyword = searchParams.get('keyword');
    // const location = useLocation();
    // const keyword =new URLSearchParams(location.search).get("keyword");
    console.log(keyword);
    return null;
}
export default Search;
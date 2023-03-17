import Qualitie from "./qualitie";

const QualitiesList = ({qualities}) => {
    return ( 
        <>
            {
                qualities.map((qual) => (
                  <Qualitie
                    key={qual._id}
                    {...qual}
                  /> 
                  
                ))
              }
        </>
     );
}
 
export default QualitiesList;
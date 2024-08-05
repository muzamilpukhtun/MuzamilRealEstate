export const CARD=({project})=>{
    return(
    <div>
    <img src={project.pic} alt={project.name} className="p-2"/>
    <div className="p-4">
    <h5 className="mb-2 tracking-tighter font-thin text-lg">{project.category}</h5>
    <h3 className="text-xl font-semibold">{project.name}</h3>
    <p className="text-sm">{project.description}</p>
    </div>
    </div>
)}
export function addWorker(Worker){
    return {type:"ADD_Worker",paylaod:Worker}
}

export function loadWorker(Worker){
    return {type:"LOAD_Worker",paylaod:Worker}
}

export function loadAllWorkers(Worker){
    return {type:"LOADALL_Workers",paylaod:Worker}
}

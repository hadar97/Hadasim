import produce from 'immer';
    
    const WorkerInitialState={
        Worker:[ ],
        singleWorker:{}
    }
    
    export const WorkerReducer=produce((state,action)=>{
        switch(action.type)
        {
            case "LOAD_Worker":state.singleWorker=(action.paylaod);break;
            case "LOADALL_Workers":state.Worker.push(action.paylaod);break;
            case "ADD_Worker":state.singleWorker=(action.paylaod);break;

        }
    },WorkerInitialState)
    export default WorkerReducer;
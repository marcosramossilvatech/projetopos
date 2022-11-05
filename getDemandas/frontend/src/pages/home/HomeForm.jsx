import React from 'react';
import './home.css';

export default props => {

    const os = props.os;


    return (
        
        <div className="container-fluid">

            <hr />
            <p className="mb-2">
            Controle das Ordens de serviços diárias
            </p>    
            <hr />    
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-danger">
                <div class="card-header py-3 text-white bg-danger border-danger">
                    <h4 class="my-0 fw-normal">OS acima de 2 dias</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{os.osacima2}</h1>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-warning">
                <div class="card-header py-3 text-white bg-warning border-warning">
                    <h4 class="my-0 fw-normal">OS criadas hoje</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{os.osabertadia}</h1>
                </div>
                </div>
            </div>  
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-success">
                <div class="card-header py-3 text-white bg-success border-success">
                    <h4 class="my-0 fw-normal">OS finalizadas</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{os.finalizadadia}</h1>
                </div>
                </div>
            </div>       
        </div>                         
            {/* <div class="row">
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-danger shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                        OS com mais de dois dias abertos</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    <label >{os.osacima2}</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold  text-primary text-uppercase mb-1">
                                        OS aberta do dia de hoje</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                        <label >{os.osabertadia}</label>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    OS finalizadas hoje</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                        <label >{os.finalizadadia}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                      
            </div> */}
        </div> 
    )
}
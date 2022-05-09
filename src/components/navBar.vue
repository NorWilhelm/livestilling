<template>
   <div class="row">
        <div class="col-8 offset-2">
            <nav class="navbar navbar-light navbar-expand-md" style="margin-bottom: 1rem;height: 80px;">
                <div class="container">
                 <a href="/"><img src="@/assets/img/livestilling_new_logo.svg" alt="LiveStilling Logo" style="width: 128px;"></a>
                <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav pt-1">
                            <li class="nav-item flex-grow-1 px-2"><a class="nav-link active" href="/"><i class="icon ion-home"></i><span>&nbsp;Hjem</span></a></li>
                            <li class="nav-item px-2">    
                                <a class="nav-link" href="#">
                                    <span>&nbsp;Turneringer</span>
                                </a>
                            </li>
                            <li class="nav-item px-2"><a class="nav-link" href="#">Mer</a></li>
                        </ul>
                    </div><a class="btn btn-outline-primary btn-sm" role="button" href="/login">Logg inn</a>
                </div>
            </nav>
        </div>
    </div>
</template>

<template>
    <div>
				<div class="row">
					<div class="col-auto mx-auto">
						<h1 class="font-weight-bold text-nowrap text-center">Norway Cup</h1>
					</div>
				</div>
        <div class="row">
					<div class="col-sm-12 col-md-10 col-lg-4 offset-md-1 offset-lg-0 order-xs-1 order-sm-1 order-md-1 order-lg-2 ">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Pågående Kamper</h4>
                        <div>
                            <div class="row" style="margin-bottom: 10px;">
                                <div class="col text-end"><span><img src="@/assets/img/fana_il_logo.png" height="20px">Fana IL</span></div>
                                <div class="col text-center"><span>2 - 1</span></div> <!-- Insert dynamic content {{ data }} - {{ data }} --> 
                                <div class="col"><span>Tertnes IL<img src="@/assets/img/tertnes_il_logo.png" height="20px"></span></div>
                            </div>
                            <div class="row">
                                <div class="col text-end"><span><img src="@/assets/img/varegg_il_logo.png" height="20px">Varegg IL</span></div>
                                <div class="col text-center"><span>-</span></div>
                                <div class="col"><span>Smørås IL<!--<img src="@/assets/img/smoraas_il_logo.png" height="20px">--></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
					<div class="col-sm-12 col-md-5 col-lg-3 offset-sm-0 offset-md-1 offset-lg-1 order-xs-2 order-sm-2 order-md-2 order-lg-1">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Fullførte Kamper</h4>
                        <div>
                            <div class="row" style="margin-bottom: 10px;">
                                <div class="col text-end"><span><img src="@/assets/img/fana_il_logo.png" height="20px">Fana IL</span></div>
                                <div class="col-1 text-center"><span>-</span></div>
                                <div class="col"><span>Tertnes IL<img src="@/assets/img/tertnes_il_logo.png" height="20px"></span></div>
                            </div>
                            <div class="row">
                                <div class="col text-end"><span><img src="@/assets/img/varegg_il_logo.png" height="20px">Varegg IL</span></div>
                                <div class="col-1 text-center"><span>-</span></div>
                                <div class="col"><span>Smørås IL<!--<img src="@/assets/img/smoraas_il_logo.png" height="20px">--></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
						<div class="col-sm-12 col-md-5 col-lg-3 order-xs-3 order-sm-3 order-md-3 order-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Kommende Kamper</h4>
                        <div>
                            <div class="row" style="margin-bottom: 10px;">
                                <div class="col text-end"><span><img src="@/assets/img/fana_il_logo.png" height="20px">Fana IL</span></div>
                                <div class="col-1 text-center"><span>-</span></div>
                                <div class="col"><span>Tertnes IL<img src="@/assets/img/tertnes_il_logo.png" height="20px"></span></div>
                            </div>
                            <div class="row">
                                <div class="col text-end"><span><img src="@/assets/img/varegg_il_logo.png" height="20px">Varegg IL</span></div>
                                <div class="col-1 text-center"><span>-</span></div>
                                <div class="col"><span>Smørås IL<!--<img src="@/assets/img/smoraas_il_logo.png" height="20px">--></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'turneringsComponent',
}
</script>
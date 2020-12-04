@foreach($product->productMedias()->orderBy('order')->get() as $media)
    <div class="owl-item animated owl-animated-in owl-animated-out">
        <div class="card" data-animation-in="">
            <img class="card-img-top"
                 src="{{Illuminate\Support\Facades\URL::to('/')."/storage/media/".$media->media}}"
                 data-hash="rentSlider-1" height="450" alt="Card image cap">
            <div class="card-img-overlay banner-2 d-flex">
            </div>
        </div>
    </div>
@endforeach
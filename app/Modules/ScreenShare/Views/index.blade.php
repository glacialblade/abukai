@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Screen Share</div>
                
                <div class="panel-body">
                    @if(!$view)
                        <button class="btn btn-success" id="share-screen">Choose a Screen to Share</button> &nbsp;
                        <a href="?view=true" target="_blank" class="btn btn-default" id="share-screen">Stream Link</a>
                    @endif
                    <div id="video"></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    {{-- <script src="/js/screen-share.js"></script> --}}
    <script src="https://cdn.firebase.com/v0/firebase.js"></script>
    <script src="//cdn.webrtc-experiment.com/getScreenId.js"></script>
    <script src="//cdn.webrtc-experiment.com/screen.js"></script>
    <script src="/js/screen-share.js"></script>
@endsection
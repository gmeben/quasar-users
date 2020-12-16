@extends('layouts.app')

@section('content')
<div class="container">

    <div class="q-pa-md" style="max-width: 400px">

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

            <q-input filled v-model="name" label="Your name" hint="Full name suggested"></q-input>
            <q-input filled v-model="email" label="Your email" lazy-rules :rules="[ val => val && val.length > 0 || 'Please provide an email']"></q-input>

            <div>
                <q-btn label="Submit" type="submit" color="primary"></q-btn>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
            </div>
        </q-form>

    </div>
</div>
@endsection

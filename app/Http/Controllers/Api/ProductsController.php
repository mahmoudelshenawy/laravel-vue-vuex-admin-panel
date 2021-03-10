<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Tag;
use Dotenv\Result\Success;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{

    public function index()
    {
        $products = Product::with(['categories', 'subCategories', 'tags'])->latest()->get();
        $categories = Category::where('parent_id', '=', null)->get();
        $tags = Tag::all();
        return response()->json([
            'products' => $products,
            'categories' => $categories,
            'tags' => $tags
        ]);
    }

    public function create()
    {
        //
    }
    public function getSubCategories($id)
    {
        $subCategories = Category::where('parent_id', $id)->get();
        return response()->json(['subCategories' => $subCategories]);
    }


    public function store(Request $req)
    {
        $product = new Product();
        $this->validate($req, [
            'name' => 'required',
            'purchase_price' => 'required|numeric',
            'selling_price' => 'required|numeric',
            'stock' => 'required|numeric',
            'category_id' => 'required|numeric',
            'sub_category_id' => 'required|numeric',
            'tag_id' => 'required|array',
        ]);
        $attrs = $req->only(['name', 'desc', 'purchase_price', 'selling_price', 'stock', 'category_id', 'sub_category_id']);
        $tag_ids = $req->tag_id;
        $product = Product::create($attrs);
        if ($req->get('image')) {
            $image = $req->get('image');
            // the proccess to save image
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            \Image::make($req->get('image'))->save(public_path('images/') . $name);
            $product->image = $name;
            $product->image_path = 'public/images/' . $name;
            $product->save();
        }
        if ($req->hasFile('image')) {
            $filename = $req->file('image')->store('public');
            $url = Storage::url($filename);

            $product->image = $filename;
            $product->image_path = $url;
            $product->save();
        }
        $product->tags()->sync($tag_ids);
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function update(Request $req, $id)
    {
        $product = Product::findOrFail($id);
        $this->validate($req, [
            'name' => 'required',
            'purchase_price' => 'required|numeric',
            'selling_price' => 'required|numeric',
            'stock' => 'required|numeric',
            'category_id' => 'required|numeric',
            'sub_category_id' => 'required|numeric',
            'tag_id' => 'required|array',
        ]);
        $attrs = $req->only(['name', 'desc', 'purchase_price', 'selling_price', 'stock', 'category_id', 'sub_category_id']);
        $tag_ids = $req->tag_id;
        if ($req->hasFile('image')) {
            $filename = $req->file('image')->store('public');
            $url = Storage::url($filename);

            $product->image = $filename;
            $product->image_path = $url;
            $product->save();
        }

        $product->tags()->sync($tag_ids);
        $product->update($attrs);
        return new ProductResource($product);
    }


    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(['msg' => 'delete successfull', 'success' => true]);
    }
}

class BlogsController < ApplicationController
    before_action :set_blog, only: [:show, :update, :destroy]

    def index
        blogs = Blog.all
        render json: blogs
    end

    def show
        render json: @blog
    end

    def create
        blog = Blog.create(blog_params)
        if blog.valid?
            render json: blog
        else
            render json: {"errors": blog.errors.full_messages}
        end
    end

    def update
        if @blog.update(blog_params)
            render json: @blog
        else
            render json: {"errors": @blog.errors.full_messages}
        end
    end

    def destroy
        @blog.destroy
        render json: @blog
    end


    private 

    def blog_params
        params.permit(:title, :body, :likes, :user_id)
    end


    def set_blog
        @blog = Blog.find(params[:id])
    end
    
end

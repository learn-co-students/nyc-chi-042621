class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :age, :instance_method_from_serializer 
    #Instance methods (return value gets sent out)
  has_many :blogs 
    #AR Macros in Serializers depend on the AR Macro in the Model
      # Macros in Serializers call on that serializer

  def instance_method_from_serializer
    theInstanceYoureTryingToSerializer = self.object
    theInstanceYoureTryingToSerializer.doctor_name
  end

end

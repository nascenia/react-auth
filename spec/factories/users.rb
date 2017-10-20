FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    role 0
    password { Faker::Internet.password }
  end
end

FactoryGirl.define do
  factory :request do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    user
    status { 0 }
  end
end

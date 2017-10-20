require 'rails_helper'

RSpec.describe Request, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:status) }
  it { should validate_presence_of(:user_id) }

  it 'has factory' do
    expect(build(:request)).to be_valid
  end

  it 'has default status pending' do
    expect(build_stubbed(:request).status).to eq 'pending'
  end
end

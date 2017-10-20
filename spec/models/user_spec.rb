require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:name) }

  it 'has factory' do
    expect(build(:user)).to be_valid
  end

  it 'has default role general' do
    expect(build_stubbed(:user).role).to eq 'general'
  end
end

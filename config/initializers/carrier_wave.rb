CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',                        # required
    :aws_access_key_id      => ENV['AWS_KEY_1'],                        # required
    :aws_secret_access_key  => ENV['AWS_SECRET_1'],  
    :region                 =>  'us-west-2'                    # required      
  }

  config.cache_dir = "#{Rails.root}/tmp/uploads"
  config.fog_public     = false   
  config.fog_directory  = ENV['AWS_BUCKET']                     # required
  # config.s3_access_policy  = :public_read 
  # config.fog_host  = "#{ENV['S3_ASSET_URL']/#{ENV['AWS_BUCKET']}" 

  config.fog_use_ssl_for_aws = false
  
end
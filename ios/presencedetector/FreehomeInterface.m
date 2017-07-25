//
//  FreehomeInterface.m
//  presence detector
//
//  Created by lakshmana on 25/07/17.
//  Copyright © 2017 ABB. All rights reserved.
//

#import "FreehomeInterface.h"
#import <Foundation/Foundation.h>

#include <freeathome/freeathome.h>

@implementation FreehomeInterface  


void fhEventCallback(fh_context* ctx, fh_event event, const fh_event_data* data, void* user_ptr)
{
    switch (event)
    {
        case FH_EVENT_CERT_CREATE_RESULT:
        {
            
            NSError *error;
            NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
            NSString *documentsDirectory = [paths objectAtIndex:0]; // Get documents folder
            NSArray *files = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:documentsDirectory error:&error];
            if (files == nil) {
                NSLog(@"Error reading contents of documents directory: %@", [error localizedDescription]);
                return;
            }
        }
            break;
    }
}


- (void) callCertCreate {
    
    fh_context* gFHContext = NULL;
    
    NSError *error;
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0]; // Get documents folder
    
    NSArray *files = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:documentsDirectory error:&error];
    
    for(NSString *file in files) {
        [[NSFileManager defaultManager] removeItemAtPath:[documentsDirectory stringByAppendingPathComponent:file]
                                                   error:&error];
        if(error) {
            //an error occurred...
        }
    }
    
    // setup library context
    fh_config cfg;
    memset(&cfg, 0, sizeof(cfg));
    cfg.m_event_callback = fhEventCallback;
    cfg.m_writable_app_data_dir = documentsDirectory.fileSystemRepresentation;
    NSString* certPath = [NSString stringWithFormat:@"%@/client.cert", documentsDirectory];
    NSString* keyPath = [NSString stringWithFormat:@"%@/client.private", documentsDirectory];
    cfg.m_certificate_path = certPath.fileSystemRepresentation;
    cfg.m_private_key_path = keyPath.fileSystemRepresentation;
    cfg.m_cloud_domain = "my-staging.busch-jaeger.de";
    gFHContext = fh_init(&cfg);
    if (!gFHContext)
    {
        printf("fh_init failed\n");
        exit(1);
    }
    
    
    return;

}


@end
